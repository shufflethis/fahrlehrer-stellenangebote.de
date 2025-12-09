import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key is missing in process.env");
  }
  return new GoogleGenAI({ apiKey: apiKey || 'dummy-key-for-types' });
};

export const generateJobDescription = async (
  schoolName: string,
  location: string,
  requirements: string,
  benefits: string
): Promise<string> => {
  const ai = getAiClient();
  
  const prompt = `
    Erstelle eine professionelle, ansprechende Stellenanzeige für einen Fahrlehrer (m/w/d).
    Verwende HTML-Tags (<h3>, <p>, <ul>, <li>) für die Formatierung, aber KEINE Markdown-Backticks.
    
    Details:
    Fahrschule: ${schoolName}
    Ort: ${location}
    Anforderungen/Klassen: ${requirements}
    Vorteile/Benefits: ${benefits}
    
    Die Sprache soll motivierend, modern und seriös sein. Strukturiere es in:
    - Kurze Einleitung über die Fahrschule
    - Was wir suchen
    - Was wir bieten
    - Kontaktinformationen (Platzhalter)
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "Entschuldigung, die Generierung ist fehlgeschlagen.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Fehler bei der Verbindung zum KI-Dienst. Bitte versuchen Sie es später erneut.";
  }
};

export const generateInterviewQuestions = async (): Promise<string> => {
    const ai = getAiClient();
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: "Nenne mir 5 anspruchsvolle und relevante Vorstellungsgesprächs-Fragen speziell für Fahrlehrer, inklusive kurzer Hinweise, worauf der Arbeitgeber bei der Antwort achten sollte. Formatiere es als HTML Liste."
        });
        return response.text || "";
    } catch (e) {
        return "Konnte keine Fragen laden.";
    }
}