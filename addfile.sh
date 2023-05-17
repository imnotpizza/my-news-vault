# 컴포넌트에 필요할 파일 자동추가
# 실행법
# 1. chmod +x addfile.sh
# 2. [절대경로]/addfile.sh 폴더명

folder_name="$1"
mkdir "$folder_name" && touch "$folder_name"/index.tsx "$folder_name"/"$folder_name".stories.tsx "$folder_name"/"$folder_name.test.tsx"
