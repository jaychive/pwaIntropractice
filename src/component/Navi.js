function Navi(){
  const naviDb = [{
                    naviText : "포트폴리오",
                    naviLink : "#portfolio"
                  },
                  {
                    naviText : "인물탐방",
                    naviLink : "#me"
                                  },
                  {
                    naviText : "사전인터뷰 및 제안",
                    naviLink : "#preInterview"
                                  }
                  ]
  return(
    <ul className="naviUl d-flex justify-content-center align-items-center mb-0 ps-0">
      {
        naviDb.map((item, index) =>{
          return(
            <li id={ 'naviID'+index } className="px-2"><a href={item.naviLink} className="text-decoration-none">{item.naviText}</a></li>
          )
        })
      }
    </ul>
  )
}

export default Navi;
