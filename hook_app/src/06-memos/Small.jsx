import { memo } from "react";

export const Small = memo(({ value }) => { //se puede usar React.memo o memo, es lo mismo

    console.log('Me volví a generar :(');
    return (
        <small>{value}</small>
    )
})