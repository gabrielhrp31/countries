import React, { useEffect, useState } from 'react'

import countryCodes from "country-codes-list";

import FilledButton from '../../components/FilledButton'
import Navbar from '../../components/Navbar'
import Select from '../../components/Select'
import AutoComplete from '../../components/AutoComplete';
import Input from '../../components/Input';
import axios from 'axios';
import Countries from '../../components/Countries';

import { Container, NotFound } from './styles'
import { useParams } from 'react-router';

const countryCallingCodes = countryCodes.customList('countryCallingCode', '{countryNameEn}: +{countryCallingCode}');
const countryLanguages = countryCodes.customList('officialLanguageCode', '{officialLanguageNameEn}');
const countryCodesList = countryCodes.customList('countryCode', '{countryNameEn}');

const filters = [
    {"region":"Região"},
    {"capital":"Capital"},
    {"lang":"Linguagem"},
    {"alpha":"País"},
    {"callingcode":"Código de Ligação"},
]

const regions = [
    {"americas":"Américas"},
    {"asia":"Ásia"},
    {"africa":"África"},
    {"europe":"Europa"},
    {"oceania":"Oceania"},
]

const placeholders = {
    "lang":"Digite uma Língua",
    "alpha":"Digite um País",
    "callingcode":"Digite um Código de Ligação"
}

const labels = {
    "lang":"Região",
    "alpha":"País",
    "callingcode":"Codigo de Ligação"
}

const options = {
    "lang":countryLanguages,
    "alpha":countryCodesList,
    "callingcode":countryCallingCodes
}


function HomePage() {

    let {region} = useParams();

    const [filterType, setFilterType] = useState(region?'region':'');
    const [filter, setFilter] = useState(region?region.toLowerCase():'');
    const [countries, setCountries] = useState([]);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        if(region){
            doSearch();
        }
    }, [])

    useEffect(() => {
        setFilter("");
    }, [filterType])

    function doSearch(){
        axios
            .get(`https://restcountries.eu/rest/v2/${filterType}/${filter}`)
            .then(({status, data, statusText})=>{
                if(status==200){
                    if(filterType==="alpha"){
                        setCountries([data]);
                    }else{
                        setCountries(data);
                    }
                }
                setNotFound(false);
            })
            .catch((e)=>{
                if(e?.response?.status===404){
                    setCountries([]);
                    setNotFound(true);
                }
            });
    }

    return (
        <>
            <Navbar />
            <Container>
                <Select label="Filtrar Por"  placeholder="Escolha uma Opção" options={filters} onSelect={(value)=>setFilterType(value)} className={!filterType && 'field-margin'}/>
                { (filterType==="region") &&
                    <Select  label="Região" placeholder="Escolha uma região" options={regions} onSelect={(region)=>setFilter(region)}/>
                }
                {  (filterType==="lang" || filterType==="alpha" || filterType==="callingcode") &&
                    <AutoComplete value={filter}  label={labels[filterType]} placeholder={placeholders[filterType]} options={options[filterType]}  onSelect={(code)=>setFilter(code)}/>
                }
                {  (filterType==="capital") &&
                    <Input label="Capital" placeholder="Digite uma Capital" value={filter} onChange={(e)=>setFilter(e.target.value)}/>
                }
                <FilledButton onClick={doSearch}>Pesquisar</FilledButton>
            </Container>
            { notFound && <NotFound > Nenhum País Encontrado!</NotFound>}
            <Countries countries={countries} />
        </>
    )
}

export default HomePage

