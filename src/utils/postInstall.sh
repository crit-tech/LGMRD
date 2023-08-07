set -e

echo "Downloading pandoc..."
curl -L https://github.com/jgm/pandoc/releases/download/3.1.6/pandoc-3.1.6-linux-amd64.tar.gz -o pandoc.tar.gz

mkdir ../pandoc
tar xvzf pandoc.tar.gz --strip-components 1 -C ../pandoc/
rm pandoc.tar.gz
