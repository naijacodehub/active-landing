import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function useHireTalent(formData: any) {
  const [loading, setLoading] = useState(false);

  const submitHireTalent = async () => {
    setLoading(true);

    try {
      await emailjs.send(
        "service_6ysezz3", // <-- your SERVICE ID
        "template_oji54mn", // <-- your TEMPLATE ID
        {
          name: formData.name,
          email: formData.email,
          telephoneNumber: formData.telephoneNumber,
          companyName: formData.companyName,
          jobDescription: formData.jobDescription,
        },
        "PUBLIC_KEY_KpvImFqFHX2bAaQDk" // <-- your PUBLIC KEY
      );
    } catch (error) {
      console.error("EmailJS error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { submitHireTalent, loading };
}
