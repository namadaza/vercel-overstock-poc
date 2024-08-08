'use server'

export async function submitBrazeForm(formData: FormData) {
    console.log(formData.get('email'))

    return true
}