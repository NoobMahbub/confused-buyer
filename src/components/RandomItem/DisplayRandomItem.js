import React from 'react';

const DisplayRandomItem = ({ random }) => {
    const { name, img } = random;

    return (
        random.id > 0 ?
            <div>
                <h2>Selected For You</h2>
                <h4 className="cat-info">

                    <br />
                    <span>
                        <img style={{ height: '50px', width: '50px', borderRadius: '50%' }} src={img} alt="" />
                    </span>

                    <span>{name}</span>


                </h4>
            </div> : <div></div>
    );
};

export default DisplayRandomItem;