// ChatGPT API Service
// Note: You'll need to add your OpenAI API key to your environment variables

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ChatGPTResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

export class ChatGPTService {
  private apiKey: string;
  private baseUrl: string = 'https://api.openai.com/v1/chat/completions';

  constructor() {
    // In production, this should come from environment variables
    this.apiKey = import.meta.env.VITE_OPENAI_API_KEY || '';
  }

  async sendMessage(
    message: string, 
    conversationHistory: ChatMessage[] = []
  ): Promise<string> {
    if (!this.apiKey) {
      throw new Error('OpenAI API key not configured');
    }

    const messages: ChatMessage[] = [
      {
        role: 'system',
        content: `You are a helpful AI assistant for Homivo, a real estate and accommodation platform. 
        Help users find their perfect accommodation by understanding their needs, preferences, and requirements. 
        Be friendly, professional, and knowledgeable about real estate. 
        Ask clarifying questions when needed to better understand their requirements.`
      },
      ...conversationHistory,
      {
        role: 'user',
        content: message
      }
    ];

    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: messages,
          max_tokens: 500,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ChatGPTResponse = await response.json();
      return data.choices[0]?.message?.content || 'Sorry, I couldn\'t generate a response.';
    } catch (error) {
      console.error('ChatGPT API Error:', error);
      throw new Error('Failed to get response from ChatGPT');
    }
  }

  // Fallback responses when API is not available
  getFallbackResponse(userInput: string): string {
    const responses = [
      "I'd be happy to help you find the perfect accommodation! Could you tell me more about your preferences?",
      "That's a great question! Let me help you with that. What specific details are you looking for?",
      "I understand you're looking for accommodation. What's your budget range and preferred location?",
      "Thanks for reaching out! I can help you explore our available properties. What type of accommodation are you interested in?",
      "I'm here to assist you with your accommodation search. Could you provide more details about your requirements?",
      "Great! I can help you find the right place. What's your preferred location and how many people will be staying?",
      "I'd love to help you find your ideal accommodation. What's most important to you - location, price, or amenities?",
      "Perfect! Let's find you the right place. Are you looking for short-term or long-term accommodation?"
    ];

    // Simple keyword matching for more relevant responses
    const input = userInput.toLowerCase();
    
    if (input.includes('price') || input.includes('cost') || input.includes('budget')) {
      return "I can help you find accommodation within your budget! What's your price range per month?";
    }
    
    if (input.includes('location') || input.includes('area') || input.includes('neighborhood')) {
      return "Great! What area or neighborhood are you interested in? I can help you find properties in your preferred location.";
    }
    
    if (input.includes('room') || input.includes('bedroom')) {
      return "How many bedrooms do you need? I can help you find properties with the right number of rooms.";
    }
    
    if (input.includes('pet') || input.includes('dog') || input.includes('cat')) {
      return "Pet-friendly accommodation is available! I can help you find properties that welcome pets.";
    }

    return responses[Math.floor(Math.random() * responses.length)];
  }
}

export const chatGPTService = new ChatGPTService(); 