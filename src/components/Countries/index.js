import React,{useEffect, useState} from 'react'
import { Container, Flag, Paginator, PageButton, Icon } from './styles'
import arrowLeft from '../../assets/icons/arrow-left.svg'
import arrowRight from '../../assets/icons/arrow-right.svg'
import { Link } from 'react-router-dom';

function Countries({countries=[], pageSize=12}) {

    const [currentPage,setCurrentPage] = useState(0);
    const [pagesNum,setPagesNum] = useState(0);

    useEffect(() => {
        setPagesNum(countries.length/pageSize);
        setCurrentPage(0);
    }, [countries])


    function pageButtons(){
        let buttons=[];
        for (let index = 0; index < pagesNum; index++) {
            buttons.push(<PageButton selected={index==currentPage} onClick={()=>setCurrentPage(index)} key={index}>{index+1}</PageButton>);
        }

        return buttons;
    }

    return (
        <Container>
            {
                countries.slice(pageSize*currentPage,pageSize*(currentPage+1)).map((country, index)=>(
                    <Link to={`/country/${country.alpha2Code}`} key={index}  ><Flag src={country.flag}/></Link>
                ))
            }
            <Paginator>
                {currentPage!=0 &&
                    <PageButton outside onClick={()=>setCurrentPage(currentPage-1)}><Icon src={arrowLeft}></Icon></PageButton>
                }
                {pageButtons()}
                {(currentPage+1<pagesNum) &&
                    <PageButton onClick={()=>setCurrentPage(currentPage+1)} outside><Icon src={arrowRight}></Icon></PageButton> 
                }
            </Paginator>
        </Container>
    )
}

export default Countries
