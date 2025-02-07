import connectDB from "@/components/Contact/db";
import ContactModel from "@/components/Contact/Model";

export async function POST(req) {
  try {
    await connectDB();

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "All fields are required." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const newContact = new ContactModel({ name, email, message });
    await newContact.save();

    return new Response(JSON.stringify({ message: "Message sent successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Server error." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}