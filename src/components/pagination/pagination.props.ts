export default interface ActionProps {
    data: any,
    paginationSize: number,
    className: string,
    handleChange(event: any, value: number): void,
    page: number
}