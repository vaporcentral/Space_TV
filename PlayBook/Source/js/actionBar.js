/*
* Copyright 2010-2011 Research In Motion Limited.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

function showTab(id) {
	if (id == 'homeland') {
		document.getElementById('homeland').style.display = 'inline';
		document.getElementById('buttons').style.display = 'none';
		document.getElementById('tabs').style.display = 'none';
		document.getElementById('tabOverflow').style.display = 'none';
	} else if (id == 'buttons') {
		document.getElementById('homeland').style.display = 'none';
		document.getElementById('tabs').style.display = 'none';
		document.getElementById('buttons').style.display = 'inline';
		document.getElementById('tabOverflow').style.display = 'none';
	} else if (id == 'tabs') {
		document.getElementById('homeland').style.display = 'none';
		document.getElementById('tabs').style.display = 'inline';
		document.getElementById('buttons').style.display = 'none';
		document.getElementById('tabOverflow').style.display = 'none';
	} else {
		document.getElementById('homeland').style.display = 'none';
		document.getElementById('tabs').style.display = 'none';
		document.getElementById('buttons').style.display = 'none';
		document.getElementById('tabOverflow').style.display = 'inline';
	}
}