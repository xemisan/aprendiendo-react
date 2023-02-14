export const saveBoard = ({ board, turn }) => {
    const serializedBoard = JSON.stringify(board)
    console.log(`Saving board: ${serializedBoard}`)
    window.localStorage.setItem('board', serializedBoard)
    window.localStorage.setItem('turn', turn)
}

export const resetBoard = () => {
    console.log('Reseting board...')
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}