#include <stdio.h>
#include <curl/curl.h>

int main(void)
{
	CURL *curl;
	char *url="https://api.github.com/users/mohankri";
	CURLcode res;
	curl = curl_easy_init();
	if(!curl) {
		return (0);
	}
	/* First set the URL that is about to receive our POST. This URL can
	   just as well be a https:// URL if that is what should receive the
	   data.
	*/
	curl_easy_setopt(curl, CURLOPT_URL, url);
	curl_easy_setopt(curl, CURLOPT_USERAGENT, "mohankri");
	/* Specify the user/pass */
	//curl_easy_setopt(curl,CURLOPT_USERPWD,"apikey:secretkey");
	/* Now specify the POST data */
	//curl_easy_setopt(curl, CURLOPT_SSL_VERIFYPEER, 0L);

	/* Perform the request, res will get the return code */
	res = curl_easy_perform(curl);
	printf("\nResult of Operation:: %d\n", res);

	/* always cleanup */
	curl_easy_cleanup(curl);
	return 0;
}
