import loadingimg from '../../images/Loadingwhite.gif';
export const Loader = ({ show = true }) => {
    return (
        <>
            {show &&
                <div className="loading">
                    <img width="200" height="200" src={loadingimg} />


                </div>
            }

        </>
    )
};