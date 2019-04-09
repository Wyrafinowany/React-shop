import React from 'react';

const BuyButton = (props) => {
    const {
        count,
        clickBuy,
        inMagazine
    } = props;

    console.log(`na magazynie   ${inMagazine}`);
    console.log(`count    ${count}`)
    const conditionClass = count < inMagazine ? 'enableBtn' : 'disableBtn';
    const conditionText = count < inMagazine ? 'Dodaj do koszyka' : 'Brak na magazynie';
    const conditionDisabled = count < inMagazine ? false : true;

    return (
        <button
            onClick={clickBuy}
            className={conditionClass}
            disabled={conditionDisabled}
        >
            {conditionText}
        </button>
    )
}

export default BuyButton;