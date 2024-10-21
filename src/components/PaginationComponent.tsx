import React, {FC} from "react";
import {useSearchParams} from "react-router-dom";

type PaginationProps = {
    flag:boolean
}
const PaginationComponent:FC <PaginationProps>= ({flag}) =>{
   const[query, setQuery]= useSearchParams({page:`1`});

    function onclickPrevHandler() {
        const page = query.get(`page`);
        if(page && +page>1){
            let PageNumb = +page;
            PageNumb--;
            setQuery({page:PageNumb.toString()})
        }

    }

    function onclickNextHandler() {
        const page = query.get(`page`);
        if(page){
            let PageNumb = +page;
            PageNumb++;
            setQuery({page:PageNumb.toString()})
        }
    }

    return(
        <div>
            <button onClick={onclickPrevHandler}>Попередня сторінка</button>
            <button onClick={onclickNextHandler} disabled={flag}>Наступна сторінка</button>
        </div>
    );
}

export default PaginationComponent;