Sample code for
[Creating Your First Titanium App](http://docs.appcelerator.com/platform/latest/#!/guide/Creating_Your_First_Titanium_App)

Last tested against 4.1.0.GA.

## Import the Project into Studio

Clone this repo, create a new Alloy project, then import the cloned repo into
the newly created Alloy project.

  1. From the menu bar, select **File > New > Mobile Project**. The **New Mobile
     Project** wizard appears.
  2. Select **Alloy > Default Alloy Project**.  Click **Next**.
  3. Fill out all fields and click **Finish**.
  4. From the menu bar, select **File > Import**. The **Import** wizard appears.
  5. Select **General > File System**. Click **Next**.
  6. For **From directory**, click **Browse**, navigate to the cloned repo, then click **Open**.
  7. Select the **app** folder, that is, checkmark the item.
  8. For **Into directory**, click **Browse**, select the newly created project, then click **OK**.
  9. Click **Finish**.

Studio creates a new Alloy project and imports the files into it.

## Import the Project using the CLI

Create a new Alloy project, then overwrite the `app` folder.

    appc new -t titanium -n FaveBooks -i com.domain.favebooks
    cp -r app ~/workspace/Favebooks/.
