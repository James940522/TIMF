function BusinessContents ({data}) {
    // console.log(data)
    return (
        <>
        <img src={data.img} alt={data.id}/>
        <div>{data.title}</div>
        <div>{data.contents}</div>
        </>
    )



}

export default BusinessContents;