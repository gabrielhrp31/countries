import { filter } from 'country-codes-list/countriesData';
import React, { useEffect, useRef, useState } from 'react'

import arrowDownIcon from "../../assets/icons/arrow-down.svg";

import { Container, Item, Label, Header as SelectedHeader } from '../Select/styles'
import { Header, List } from './styles'

function AutoComplete({options, label, placeholder, value:selectedKey, onSelect}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLabel, setSelectedLabel] = useState('');
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const listRef  = useRef(null);
    const inputRef  = useRef(null);
    

    useEffect(() => {
        document.addEventListener('mousedown',handleClickOutside);
        return () => {
            document.removeEventListener('mousedown',handleClickOutside);
        }
    }, [])

    useEffect(()=>{
        doFilter();
    },[selectedKey])

    useEffect(()=>{
        doFilter();
    },[inputValue])

    function doFilter(){
        let afterFilter = {};

        if(inputValue.replace(/\s/g,'')!=""){
            Object.keys(options).forEach((key)=>{
                if(options[key].indexOf(inputValue)>=0 ){
                    afterFilter[key] = options[key];
                }
            });
        }
        setFilteredOptions(afterFilter);
    }

    function handleSelect (key,label){
        if(onSelect){
            onSelect(key);
        }
        setSelectedLabel(label);
        setIsOpen(false);
    }

    function handleInputChange(value){
        setInputValue(value)
    }

    function handleClickOutside(event) {
        if (listRef.current && !listRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    }

    useEffect(()=>{
        if(inputRef.current){
            inputRef.current.focus();
        }
    },[isOpen])

    function handleClick(){
        setIsOpen(true);
    }

    return (
        <Container>
            <Label>{label}</Label>
            { !isOpen ? 
                <SelectedHeader onClick={handleClick}>
                    {selectedKey ?
                        <>{selectedLabel}</>
                        :
                        <>{placeholder || ''}</>
                    } 
                    <img src={arrowDownIcon} />
                </SelectedHeader>
                :
                <Header ref={inputRef} value={inputValue} onChange={(e)=>handleInputChange(e.target.value)} placeholder={placeholder} onBlur={()=>setIsOpen(false)} />
            }
            <List ref={listRef} className={(isOpen?"open":"")}>
                    <Item>{placeholder}</Item>
                {
                    Object.keys(filteredOptions).map((key)=>{
                        return <Item selected={key===selectedKey} onClick={()=>handleSelect(key, filteredOptions[key])} key={key}>{filteredOptions[key]}</Item>
                    })
                }
            </List>
        </Container>
    )
}

export default AutoComplete
