import React, { useEffect, useRef, useState } from 'react'

import arrowDownIcon from "../../assets/icons/arrow-down.svg";

import { Container, Label, Header, List, Item } from './styles'

function Select({options, label, placeholder, onSelect, ...props}) {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedKey, setSelectedKey] = useState('');
    const [selectedLabel, setSelectedLabel] = useState('');
    const listRef  = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown',handleClickOutside);
        return () => {
            document.removeEventListener('mousedown',handleClickOutside);
        }
    }, [])


    function handleClickOutside(event) {
        if (listRef.current && !listRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    }

    function handleSelect (key,label){
        if(onSelect){
            onSelect(key);
        }
        setSelectedKey(key);
        setSelectedLabel(label);
        setIsOpen(false);
    }

    return (
        <Container {...props}>
            <Label>{label}</Label>
                <Header onClick={()=>setIsOpen(true)}>
                    {selectedKey ?
                        <>{selectedLabel}</>
                        :
                        <>{placeholder || ''}</>
                    } 
                    <img src={arrowDownIcon} />
                </Header>
                <List ref={listRef} className={(isOpen?"open":"")}>
                    <Item>{placeholder}</Item>
                    {
                        options.map((item)=>{
                            let itemComponent='';
                            Object.keys(item).forEach((key)=>{
                                itemComponent=<Item selected={key==selectedKey} onClick={()=>handleSelect(key, item[key])} key={key}>{item[key]}</Item>
                            });
                            return itemComponent;
                        })
                    }
                </List>
        </Container>
    )
}

export default Select
