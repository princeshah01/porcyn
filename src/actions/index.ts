"use server";
export async function subscribeAction(formData: FormData) {
  const email = formData.get("email");
  console.log("Subscribing...", email);
}
