import './Nutrition.css'

export default function Nutrition() {
    return (
        <section className='nutrition-section'>
            <h2>Nutrition</h2>
            <p>The table below shows nutritional values per serving without the additional fillings.</p>
            <table>
                <tbody>
                    <tr className='nutrition-item'>
                        <td>Calories</td>
                        <td className='bold'>277kcal</td>
                    </tr>
                    <tr className='nutrition-item'>
                        <td>Carbs</td>
                        <td className='bold'>0g</td>
                    </tr>
                    <tr className='nutrition-item'>
                        <td>Protein</td>
                        <td className='bold'>20g</td>
                    </tr>
                    <tr className='nutrition-item'>
                        <td>Fat</td>
                        <td className='bold'>22g</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}