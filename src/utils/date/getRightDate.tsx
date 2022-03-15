export const getRightDate = (date: Date):string => {
    const parsedDate = new Date(date);
    const day = parsedDate.getDate();
    const month = parsedDate.getMonth() + 1; //months from 1-12
    const year = parsedDate.getFullYear();

    return `${day}.${month}.${year}`;
}