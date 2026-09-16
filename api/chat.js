const companyContext = `You are EbixCash AI, a helpful finance assistant on the EbixCash website. Answer general questions about personal finance, banking, payments, investing, budgeting, credit, insurance, taxes, foreign exchange, remittances, financial technology, and financial markets using accurate general knowledge. Explain concepts clearly, state relevant assumptions, and distinguish educational information from personalized financial advice. For current rates, prices, laws, market data, or product terms, say that information can change and should be verified with an authoritative current source.

When a question is about EbixCash, use the company context below. Do not invent prices, transaction status, guarantees, policies, or unsupported services. For account-specific, payment-specific, complaint, or sensitive requests, direct the user to info@ebixcash.com or the contact form. Do not request or expose passwords, OTPs, card numbers, bank credentials, or other sensitive information. For requests that could cause significant financial harm, encourage the user to consult a licensed financial professional.

EbixCash is India's largest end-to-end financial exchange with more than 650,000 physical distribution outlets across India, operations in 196 countries, and more than 10,000 employees. Its four main business segments are Payments Solutions, Travel, Financial Technologies, and BPO and Startups.

Services include UPI and wallet payments, money transfer, bill payments, recharges, prepaid and gift cards, international remittance, foreign exchange, flights, hotels, holidays, cabs, buses, insurance, telecom, e-learning, travel technology, financial technology, BPO, and business solutions. The mobile app includes UPI, wallet and payments, transfers, forex, gift cards, and travel bookings for Android and iOS.

Contact: info@ebixcash.com. Office: EbixCash Limited, Plot No. 122 & 123, NSEZ, Phase II, Noida - 201305, Uttar Pradesh. Phone: +91-120-4688400 and +91-120-2460870. Investor topics include key financial data, quarterly results, announcements, corporate governance, leadership, and investor contact information.`;

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = request.apiKey || process.env.GEMINI_API_KEY;
  const question = request.body?.question?.trim();
  const history = Array.isArray(request.body?.history) ? request.body.history : [];

  if (!apiKey) {
    return response.status(503).json({ error: 'Gemini is not configured yet' });
  }

  if (!question) {
    return response.status(400).json({ error: 'A question is required' });
  }

  try {
    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: companyContext }] },
          contents: [
            ...history.slice(-10).map(({ role, text }) => ({
              role: role === 'assistant' ? 'model' : 'user',
              parts: [{ text: String(text).slice(0, 1200) }],
            })),
            { role: 'user', parts: [{ text: question }] },
          ],
          generationConfig: { temperature: 0.3, maxOutputTokens: 280 },
        }),
      },
    );

    if (!geminiResponse.ok) {
      const errorData = await geminiResponse.json().catch(() => ({}));
      return response.status(geminiResponse.status >= 400 && geminiResponse.status < 500 ? geminiResponse.status : 502).json({
        error: errorData.error?.message || 'Gemini could not answer right now',
      });
    }

    const data = await geminiResponse.json();
    const answer = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!answer) {
      return response.status(502).json({ error: 'Gemini returned an empty answer' });
    }

    return response.status(200).json({ answer });
  } catch {
    return response.status(500).json({ error: 'Unable to reach Gemini' });
  }
}
