const Background = () => {

    return (

        <div className="fixed inset-0 bg-white">

            <div className="fixed inset-0 pointer-events-none select-none">

                {/* Ray One */}

                <div className="absolute rounded-full w-[480px] h-[680px] -top-[540px] right-[250px] -rotate-[80deg] blur-[110px]"

                    style={{

                        background: 'radial-gradient(rgba(83, 196, 255, 0.5) 0%, rgba(43, 166, 255, 0) 100%)'

                    }}

                />

                {/* Ray Two */}

                <div className="absolute rounded-full w-[110px] h-[400px] -top-[280px] right-[350px] rotate-[20deg] blur-[60px] mix-blend-overlay opacity-60"

                    style={{

                        background: 'radial-gradient(rgba(83, 196, 255, 0.5) 0%, rgba(43, 166, 255, 0) 100%)'

                    }}

                />

                {/* Ray Three */}

                <div className="absolute rounded-full w-[400px] h-[370px] -top-[350px] right-[200px] blur-[21px] mix-blend-overlay opacity-60"

                    style={{

                        background: 'radial-gradient(rgba(83, 196, 255, 0.5) 0%, rgba(43, 166, 255, 0) 100%)'

                    }}

                />

                {/* Ray Four */}

                <div className="absolute rounded-full w-[330px] h-[370px] -top-[330px] right-[50px] blur-[21px] mix-blend-overlay opacity-50"

                    style={{

                        background: 'radial-gradient(rgba(83, 196, 255, 0.5) 0%, rgba(43, 166, 255, 0) 100%)'

                    }}

                />

                {/* Ray Five */}

                <div className="absolute rounded-full w-[110px] h-[400px] -top-[280px] -right-[10px] rotate-[40deg] blur-[60px] mix-blend-overlay opacity-80"

                    style={{

                        background: 'radial-gradient(rgba(83, 196, 255, 0.5) 0%, rgba(43, 166, 255, 0) 100%)'

                    }}

                />

            </div>

        </div>

    );

};

export default Background;