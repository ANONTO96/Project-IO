import errorImg from"../../assets/error-404.png";
const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-52">
            <img src={errorImg} alt="Error 404" />
            <h1 className="text-2xl font-bold mt-10">page not found</h1>
        </div>
    );
};

export default ErrorPage;