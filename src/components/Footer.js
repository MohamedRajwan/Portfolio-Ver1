export default function Footer(){

    const year = new Date();
    return <div className="py-4 bg-secondary text-center text-gray-300">&copy;Rajwan-Afm {year.getFullYear()}</div>
}