if ["$(ls -A deploy_settting/mysql/db)"]; then
    echo "folder is empty"
    docker-compose up

else
    echo "not empty"
    docker-compose restart server

fi
