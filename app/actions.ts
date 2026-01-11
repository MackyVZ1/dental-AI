"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function getGeminiResponse(message: string) {
  try {
    const apiKey = process.env.GEMINI_API_KEY || process.env.gemini_api_key || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    
    if (!apiKey) {
      throw new Error("Gemini API key not found in environment variables.");
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      systemInstruction: "คุณคือ Dental AI ผู้ช่วยทันตกรรมอัจฉริยะ ให้คำแนะนำเกี่ยวกับสุขภาพช่องปาก วิเคราะห์อาการเบื้องต้น และให้คำแนะนำการดูแลฟันอย่างเป็นมิตรและเป็นมืออาชีพ ภาษาที่ใช้ต้องเข้าใจง่าย และเน้นย้ำเสมอว่าคุณเป็นเพียง AI หากเป็นปัญหาร้ายแรงควรพบทันตแพทย์ พร้อมทั้งใช้ Emoji ที่เกี่ยวข้องสม่ำเสมอ เช่น 🦷, 😊, ✨",
    });

    const result = await model.generateContent(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "ขออภัยด้วยค่ะ ฉันไม่สามารถเชื่อมต่อกับระบบ AI ได้ในขณะนี้ กรุณาลองใหม่ภายหลังนะคะ 😔";
  }
}
