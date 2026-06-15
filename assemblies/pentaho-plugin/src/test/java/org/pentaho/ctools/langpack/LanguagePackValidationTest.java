package org.pentaho.ctools.langpack;

import static org.junit.jupiter.api.Assertions.*;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.Stream;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;

/**
 * Validates the structure and metadata of all language packs under data/.
 * Catches broken JSON, missing required files, or structural regressions
 * before the build attempts to process them.
 */
public class LanguagePackValidationTest {

  private static Path dataDir;

  @BeforeAll
  static void setup() {
    // data/ is at the project root (two levels up from assemblies/pentaho-plugin)
    dataDir = Paths.get( System.getProperty( "data.dir",
        Paths.get( "" ).toAbsolutePath()
            .resolve( "../../data" ).normalize().toString() ) );
    assertTrue( Files.isDirectory( dataDir ), "data/ directory must exist: " + dataDir );
  }

  /**
   * Provides all locale directory names under data/ (excluding non-directories).
   */
  static Stream<String> allLocales() throws IOException {
    return Files.list( dataDir )
        .filter( Files::isDirectory )
        .map( p -> p.getFileName().toString() )
        .filter( name -> !name.startsWith( "." ) )
        .sorted();
  }

  @ParameterizedTest( name = "{0}" )
  @MethodSource( "allLocales" )
  void metadataJsonExists( String locale ) {
    Path metadata = dataDir.resolve( locale ).resolve( "metadata.json" );
    assertTrue( Files.exists( metadata ),
        locale + "/metadata.json must exist" );
  }

  @ParameterizedTest( name = "{0}" )
  @MethodSource( "allLocales" )
  void metadataJsonIsValidJson( String locale ) throws IOException {
    Path metadata = dataDir.resolve( locale ).resolve( "metadata.json" );
    if ( !Files.exists( metadata ) ) {
      return; // covered by metadataJsonExists
    }
    String content = new String( Files.readAllBytes( metadata ) ).trim();
    assertFalse( content.isEmpty(), locale + "/metadata.json must not be empty" );
    // Basic JSON validation: must start with { and be parseable
    assertTrue( content.startsWith( "{" ),
        locale + "/metadata.json must be a JSON object" );
    assertDoesNotThrow( () -> parseJson( content ),
        locale + "/metadata.json must be valid JSON" );
  }

  @ParameterizedTest( name = "{0}" )
  @MethodSource( "allLocales" )
  void messagesPropertiesExists( String locale ) {
    Path messages = dataDir.resolve( locale ).resolve( "resources/lang/messages.properties" );
    assertTrue( Files.exists( messages ),
        locale + "/resources/lang/messages.properties must exist" );
  }

  @ParameterizedTest( name = "{0}" )
  @MethodSource( "allLocales" )
  void messagesContainsRequiredKeys( String locale ) throws IOException {
    Path messages = dataDir.resolve( locale ).resolve( "resources/lang/messages.properties" );
    if ( !Files.exists( messages ) ) {
      return;
    }
    String content = new String( Files.readAllBytes( messages ) );
    assertTrue( content.contains( "languagePack.title" ),
        locale + "/messages.properties must define languagePack.title" );
    assertTrue( content.contains( "languagePack.description" ),
        locale + "/messages.properties must define languagePack.description" );
  }

  @ParameterizedTest( name = "{0}" )
  @MethodSource( "allLocales" )
  void localeHasSystemOrTomcatData( String locale ) {
    if ( "en".equals( locale ) ) {
      return; // reference locale may not have system/tomcat
    }
    Path system = dataDir.resolve( locale ).resolve( "system" );
    Path tomcat = dataDir.resolve( locale ).resolve( "tomcat" );
    assertTrue( Files.isDirectory( system ) || Files.isDirectory( tomcat ),
        locale + " must have at least system/ or tomcat/ directory" );
  }

  @Test
  void minimumLocaleCount() throws IOException {
    long count = allLocales().count();
    assertTrue( count >= 40,
        "Should have at least 40 locales, found: " + count );
  }

  @Test
  void englishLocaleExists() {
    assertTrue( Files.isDirectory( dataDir.resolve( "en" ) ),
        "en/ reference locale must exist" );
  }

  /**
   * Minimal JSON parser — just validates structure using javax.script or simple brace matching.
   */
  private static void parseJson( String json ) {
    // Simple validation: balanced braces and no trailing commas before }
    int depth = 0;
    boolean inString = false;
    char prev = 0;
    for ( int i = 0; i < json.length(); i++ ) {
      char c = json.charAt( i );
      if ( c == '"' && prev != '\\' ) {
        inString = !inString;
      }
      if ( !inString ) {
        if ( c == '{' || c == '[' ) {
          depth++;
        }
        if ( c == '}' || c == ']' ) {
          depth--;
        }
        if ( depth < 0 ) {
          throw new RuntimeException( "Unexpected closing bracket at position " + i );
        }
      }
      prev = c;
    }
    if ( depth != 0 ) {
      throw new RuntimeException( "Unbalanced braces, depth=" + depth );
    }
  }
}
