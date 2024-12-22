import conf from "./retellAi-conf";
const SERVER_API_URL = conf.SERVER_API_URL;

export const registerCall = async (RETELL_AI_AGENT_ID) => {
  try {
    const response = await fetch(`${SERVER_API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        agent_id: RETELL_AI_AGENT_ID,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("API call failed", err);
    throw new Error(err);
  }
};
