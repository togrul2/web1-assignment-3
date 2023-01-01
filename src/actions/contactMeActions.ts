import {BACKEND_URL} from "@/config";
import {NETWORK_ERR_MSG} from "@/actions/movieActions";
import {MessageResponse, SendMessageBody} from "@/actions/types";

export async function sendEmail(body: SendMessageBody): Promise<MessageResponse> {
  try {
    const url = `${BACKEND_URL}/messages`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
    if (response.status === 201) {
      return {error: null};
    }
    return {error: "We couldn't send your email, please try again."}
  } catch {
    return {error: NETWORK_ERR_MSG};
  }
}