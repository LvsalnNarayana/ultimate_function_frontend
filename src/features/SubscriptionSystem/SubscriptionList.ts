export const subscriptionList: Subscription[] = [
    {
        title: 'Pro',
        duration: '4 months',
        price: 60,
        currency: 'USD',
    },
    {
        title: 'Pro',
        duration: '1 month',
        price: 20,
        currency: 'USD',
    }
]
export interface Subscription {
    title: string
    duration: string
    price: number
    currency: string
}