function Card(Props) {
    return (
        <div style={{ backgroundColor: Props.bgcolor }} className="px-10 py-5 border rounded-md text-center flex-grow">
        <h1 className="font-medium text-2xl">{Props.title}</h1>
        <p>{Props.subtitle}</p>
        </div>
    )
}
export default Card