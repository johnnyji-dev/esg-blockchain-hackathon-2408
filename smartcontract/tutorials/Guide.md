[hardhat]
# hardhat 환경 설치
npm install --save-dev hardhat

# hardhat 프로젝트 생성
npx hardhat init

# hardhat 프로젝트 폴더 구조
project-dir>
    \_ contracts
        \_ .sol
    \_ ignition : 의미상 deploy로 폴더명을 변경해도 좋다.
        \_ moudules
            \_ .ts
    \_ node_modules
    \_ test
        \_ .ts
    \_ .gitigore
    \_ hardhat.config.ts
    \_ package-lock.json
    \_ package.json
    \_ README.md
    \_ tsconfig.json

# 테스트
project-dir>test>*.ts 해당 위치에 테스트 파일이 있고,
npx hardhat test 명령으로 테스트 파일을 실행시킬 수 있다.

# 컴파일
project-dir>contracts>*.sol 해당 위치에 솔리디티 파일이 있고,
npx hardhat compile 명령으로 솔리디티 파일을 컴파일 할 수 있다.

# 배포
project-dir>ignition>modules>*.ts 해당 위치에 배포 파일이 있고,
npx hardhat ignition deploy ./ignition/modules/Lock.ts 명령으로
hardhat.config.ts에 설정된 네트워크에 배포할 수 있다.

npx hardhat ignition deploy ./ignition/modules/Lock.ts --network ganache
npx hardhat ignition deploy ./ignition/modules/Lock.ts --network sepolia

# node 연결
npx hardhat node 
Started HTTP and WebSocket JSON-RPC server at http://0.0.0.0:8545/

# 실행
project-dir>에 scripts 폴더를 만들고,
배포한 스마트 컨트랙트에 이벤트를 발생시킬 client 소스를 작성한다.(ethersjs 사용)
