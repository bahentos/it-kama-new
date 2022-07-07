import s from './Paginator.module.css'

const Paginator = ({total_users_count, page_size, on_page_change, current_page}) => {
    let pages_count = Math.ceil(total_users_count / page_size)

    let pages = []
    for (let i = 1; i <= pages_count; i++) {
        pages.push(i)
    }

    return (
        <div className={s.pageNumberContainer}>
            {pages.map((p, index) => {
                return <div
                    key={`pages_${index}`}
                    className={current_page === p ? s.pageNumber + ' ' + s.selectedPage : s.pageNumber}
                    onClick={(e) => on_page_change(p)}
                >{p}</div>
            })}
        </div>
    )
}

export default Paginator