import s from './Paginator.module.css'
import { useState } from 'react';
import { useEffect } from 'react';


const Paginator = ({ current_page, on_page_change, page_size, total_items_count, portion_size }) => {
    const [curentPortion, setCurentPortion] = useState(Math.ceil(current_page / portion_size))
    useEffect(() => {
        setCurentPortion(Math.ceil(current_page / portion_size))
    }, [current_page])

    let goToPage = () => {
        let page = prompt('Укажите страницу')
        if (page <= 0 || page === undefined) {
            on_page_change(1)
        } else if (page >= pages_count) {
            on_page_change(pages_count)
        } else {
            on_page_change(page)
        }
    }

    //Вычисление количества страниц
    let pages_count = Math.ceil(total_items_count / page_size)
    //Вычисление количество порций и их левой и правой границы
    let portion_count = Math.ceil(pages_count / portion_size)
    let leftPortionNumber = (curentPortion - 1) * portion_size + 1
    let RightPortionNumber = curentPortion * portion_size


    let pages = []
    for (let i = 1; i <= pages_count; i++) {
        pages.push(i)
    }

    let portions = pages.filter(portion => {
        if (portion >= leftPortionNumber && portion <= RightPortionNumber)   portion
    })

    return (
        <div className={s.pageNumberContainer}>
            <button
                className={curentPortion === 1 ? s.disable : s.arrow}
                disabled={curentPortion === 1 ? true : false}
                onClick={() => { setCurentPortion(curentPortion - 1) }} >{'<'}</button>
            {portions.map((p, index) => {
                return <div
                    key={`pages_${index}`}
                    className={current_page === p ? s.pageNumber + ' ' + s.selectedPage : s.pageNumber}
                    onClick={() => { on_page_change(p) }}
                >{p}</div>
            })}
            <button
                className={curentPortion === portion_count ? s.disable : s.arrow}
                disabled={curentPortion === portion_count ? true : false}
                onClick={() => { setCurentPortion(curentPortion + 1) }} >{'>'}</button>
            <button
                onClick={goToPage}
                className={s.btn} >Go to page</button>
        </div>
    )
}

export default Paginator