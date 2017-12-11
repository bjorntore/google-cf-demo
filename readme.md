- Intro. Explain why CFs are interesting and the biggest sellingspoints.
- 15-20 mins hands on demo:

	- Create new project in Google Cloud Platform
		- Enable Cloud Functions API
	- Create a github repo
		- Add a folder "MyFunction" with a index.js file.
		- Export a named function MyFunction which takes params (req, res) and returns a http response.
	- Create Cloud Source repo in Google Cloud Platform
		- Link it to Github via your account
	- Create new cloud function with git repo.
		- Rember to set correct folder name
		- And correct function name

	- Create more advanced function with GET/POST and Google Cloud Storage
		- Enable Cloud Storage API
		- Create demo entity
		- Create new function (folder and index.js in git, setup in GCP)
		- Implement POST which saves new instance
		- Implement Get which returns all instances
		- Test in Postman
		
	When inevitable panic occurs: Fall back to pre-setup solution :D
