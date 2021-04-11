import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Countries from '../../components/Countries';
import Navbar from '../../components/Navbar';

import {Container, CountryData} from './styles';

function CountryPage() {

    const [country, setCountry] = useState(false); 
    const [borders, setBorders] = useState([]); 

    const history = useHistory(); 

    let {alpha} = useParams();

    useEffect(()=>{
        if(alpha){
            loadCountry();
        }
    },[alpha])

    useEffect(()=>{
        if(country){
            loadBorderCountries();
        }
    },[country])

    function loadCountry(){
        axios
            .get(`https://restcountries.eu/rest/v2/alpha/${alpha}`)
            .then(({status, data, statusText})=>{
                if(status==200){
                    setCountry(data);
                }
            })
            .catch((e)=>{
                if(e?.response?.status===404){
                    history.goBack();
                }
            });
    }

    function loadBorderCountries(){
        let codes ="";
        country.borders.forEach((border, index)=>{
            codes+=border+(index+1<country.borders.length?";":"")
        })
        axios
            .get(`https://restcountries.eu/rest/v2/alpha?codes=${codes}`)
            .then(({status, data, statusText})=>{
                if(status==200){
                    setBorders(data);
                }
            })
            .catch((e)=>{
                // 
            });
    }

    return (
        <Container>
            <Navbar />
            { country &&
                <CountryData>
                    <div>
                        <img src={country.flag} />
                    </div>
                    <div>
                        <p>Nome: {country.name}</p>
                        <p>Capital: {country.capital}</p>
                        <p>Região: <Link to={`/${country.region}`}>{country.region}</Link></p>
                        <p>Sub-Região: {country.subregion}</p>
                        <p>População: {new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(country.population)}</p>
                        <p>Linguas: 
                            {
                                country.languages
                                .map((lang, index)=>(
                                    ' '+lang.nativeName + (index+1<country.languages.length?',':'')
                                ))
                            }
                        </p>
                    </div>
                </CountryData>
            }
            { borders.length>0 &&
                <Countries countries={borders} pageSize={12} />
            }
        </Container>
    )
}

export default CountryPage
