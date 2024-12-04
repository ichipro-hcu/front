
const baseUrl = "https://ichipro-api.sasakulab.com/api/v1/"
const options: RequestInit = {"credentials": "include"}

export async function getUserBasicInformation(domain: String = baseUrl, option: RequestInit = options) {
    try {
        let request = await fetch(domain + "user/me", option)
        let result = await request.json()
        return result
    } catch (e) {
        let result = {
            "success": false,
            "message": "Failed to retreve Google OAuth Login Url: " + e,
            "result": null
            }
        return result
    }
}

export async function getUserAccessFromInformation(domain: string = baseUrl, option: RequestInit = options) {
    try {
        let request = await fetch(domain + "attend/me", option)
        let result = await request.json()
        return result
    } catch (e) {
        let result = {
            "success": false,
            "message": "Failed to get my ip Address: " + e,
            "result": null
            }
        return result
    }
}
