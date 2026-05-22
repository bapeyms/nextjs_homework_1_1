type HomePageProps = {
    column1: String;
    column2: String;
    column3: String;
}

export default function HomePageView({column1, column2, column3}: HomePageProps) {
    return <>
    <div className="grid grid-cols-3 gap-10">
        <div>
            <h1>{column1}</h1>
        </div>
        <div>
            <h1>{column2}</h1>
        </div>
        <div>
            <p>{column3}</p>
        </div>
    </div>
    </>
}