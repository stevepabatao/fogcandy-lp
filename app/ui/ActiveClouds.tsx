import { Clouds, Cloud } from "@react-three/drei"

const ActiveClouds = () => {
    return (
        <>
            <Clouds>
                <Cloud concentrate="outside" seed={1} segments={100} color={'red'} bounds={20} volume={20} growth={10} opacity={0.15} position={[0, 0, -10]} speed={5} />
                <Cloud concentrate="outside" seed={1} segments={200} color={'white'} bounds={20} volume={20} growth={10} opacity={0.15} position={[0, 0, -10]} speed={1} />
                <Cloud concentrate="outside" seed={1} segments={300} color={'green'} bounds={20} volume={20} growth={10} opacity={0.15} position={[0, 0, -10]} speed={5} />
                <Cloud concentrate="outside" seed={1} segments={400} color={'yellow'} bounds={20} volume={20} growth={10} opacity={0.15} position={[0, 0, -10]} speed={1} />
            </Clouds>
        </>
    )
}

export default ActiveClouds