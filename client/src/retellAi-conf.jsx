const conf = {
  SERVER_API_URL: String(import.meta.env.VITE_SERVER_API_URL),
  RETELL_AI_AGENT_ID: String(import.meta.env.VITE_RETELL_AI_AGENT_ID),
  RETELL_AL_LLM_KEY: String(import.meta.env.VITE_RETELL_AL_LLM_KEY),
};

export default conf;