#  FROM openjdk:8
#  COPY ./target/manage-0.0.1-SNAPSHOT.jar manage-0.0.1-SNAPSHOT.jar
# # # CMD ["java","-jar","files-jdbc-0.0.1-SNAPSHOT.jar"]
#  CMD java -jar target/manage-0.0.1-SNAPSHOT.jar

FROM open-liberty:springBoot2
COPY --chown=1001:0 ./target/manage-0.0.1-SNAPSHOT.jar /config/dropins/spring/