import Categories from "./Categories";

function Home () {
    
    return(
        <div className="home">
            <div className="flex  flex-col bg-gray-200 mx-[24rem] my-10 py-7 rounded-3xl shadow-sm shadow-gray-300">
                <h1 className="text-5xl text-center mb-5 text-gray-800 font-sans font-semibold">Bienvenue sur BibliOnline</h1>
                <h2 className="text-xl text-center text-gray-800 font-sans font-semibold">Voici ci-dessous les catégories disponible dans notre bibliotèque.</h2>
                <h2 className="text-xl text-center text-gray-800 font-sans font-semibold">Vous pourrez aussi trouver votre bonheur dans notre collection en affinant vos recherches</h2>
            </div>
            <Categories/>
        </div>
    );
}

export default Home;