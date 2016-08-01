const initialState = {
  width:32,
  isColor:false,
  background:"white"
}

export default function (state=initialState,action) {
    switch(action.type){
        case "WIDTH_CHANGED":
            return Object.assign({}, state, {
                width: action.width
            })
        case "TEXT_COLOR_CHANGED":
            return Object.assign({}, state, {
                isColor: action.isColor
            })
        case "BACKGROUND_CHANGED":
            return Object.assign({}, state, {
                background: action.background
            })

    }

    return state;
} 