
import star from '@/Assets/Images/star.png'
import noStar from '@/Assets/Images/no-star.png'

function Rating({ rating }) {

    return (
        <div className='rating'>
            {
                [...Array(5)].map((valeur, index) => {
                    if (index + 1 < rating) {
                        return (
                            <img src={star} alt="etoileRouge" key={index} />
                        )
                    } else {
                        return (
                            <img src={noStar} alt="etoilegrise" key={index} />
                        )
                    }
                })
            }
        </div>
    )
}

export default Rating