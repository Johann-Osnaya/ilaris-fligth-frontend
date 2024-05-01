export interface Diary {
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment?: string
}

enum Weather {
    Sunny = 'sunny',
    Rainy = 'rainy',
    Cloudy = 'cloudy',
    Stormy = 'stormy',
    Windy = 'windy'
}

enum Visibility {
    Great = 'great',
    Good = 'good',
    Ok = 'ok',
    Poor = 'poor',
}

