# Chat Support Integration

This project includes a real-time chat support feature with ChatGPT integration.

## Features

- Floating chat button (bottom-right corner)
- Real-time chat interface
- ChatGPT API integration
- Fallback responses when API is unavailable
- Responsive design
- Message history with timestamps

## Setup

### 1. Get OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create an account or sign in
3. Generate a new API key
4. Copy the API key

### 2. Configure Environment Variables

Create a `.env` file in the root directory and add:

```env
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

Replace `your_openai_api_key_here` with your actual OpenAI API key.

### 3. Install Dependencies

The chat support uses existing UI components from the project. No additional dependencies are required.

## Usage

1. The chat button appears as a floating icon in the bottom-right corner of every page
2. Click the chat button to open the chat interface
3. Type your message and press Enter or click the send button
4. The AI will respond with helpful information about accommodation options
5. Click the X button to close the chat

## Components

- `ChatSupport.tsx` - Main chat component with UI
- `chatgpt.ts` - ChatGPT API service with fallback responses

## Customization

### Modifying AI Responses

Edit the `getFallbackResponse` method in `src/services/chatgpt.ts` to customize fallback responses.

### Changing Chat Position

Modify the CSS classes in the floating button in `ChatSupport.tsx`:

```tsx
className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 z-50"
```

### Styling

The chat uses the existing design system components. Modify the styling by updating the component classes.

## API Configuration

The ChatGPT service is configured to:
- Use GPT-3.5-turbo model
- Maximum 500 tokens per response
- Temperature of 0.7 for balanced creativity
- System prompt optimized for real estate assistance

## Error Handling

- If the API key is not configured, the chat will use fallback responses
- Network errors are handled gracefully with fallback responses
- Loading states are shown during API calls

## Security

- API keys are stored in environment variables (not in code)
- API calls are made directly from the frontend (consider using a backend proxy for production)
- No sensitive data is stored in the chat interface 