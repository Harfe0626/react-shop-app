import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { setActiveCategory } from '../../../../store/categories/categories.slice';
import { CategoriesName } from '../../../../store/categories/categories.type';
import styles from './CategoryTab.module.scss';

type CategoryTabProps = {
    text: string;
    categoryName: CategoriesName
}

const CategoryTab: FC<CategoryTabProps> = ({ text, categoryName }) => {
    const dispatch = useAppDispatch();
    const category = useAppSelector((state) => state.categoriesSlice);

    const getActiveCategory = () => {
        dispatch(setActiveCategory(categoryName))
    }

    return (
        <button
            className={
                categoryName === category
                    ? styles.active_category
                    : styles.category_button
            }
            onClick={getActiveCategory}
        >
            {text}
        </button>
    )
}

export default CategoryTab